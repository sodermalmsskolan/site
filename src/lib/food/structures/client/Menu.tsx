import useSWR, { responseInterface } from "swr";
import { IMenu, Menu, MenuQuery } from "../shared/Menu";
import ky from "ky-universal";
import dayjs from "dayjs";
import { ClientDish } from "./Dish";
import { firstLetterUpperCase } from "../../../utils/letters";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import React from "react";
import { useLang } from "../../../../hooks/lang";

dayjs.extend(isSameOrBefore);

export class ClientMenu extends Menu {
  dishes: ClientDish[];

  constructor({ dishes, date }: IMenu) {
    super({ dishes, date });

    this.dishes = dishes.map((dish) => new ClientDish(dish));
  }

  public static async fetchAll(): Promise<ClientMenu[]> {
    const res = await ky.get("/api/food/menus").json<IMenu[]>();

    const menus = res
      .map((menu) => new ClientMenu(menu))
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return menus;
  }

  public static use({
    limit = 10,
    offset = 0,
  }: MenuQuery): responseInterface<ClientMenu[], unknown> {
    return useSWR(
      `/api/food/menus?limit=${limit}&offset=${offset}`,
      async () => {
        const menus = await ClientMenu.fetchAll();

        const now = dayjs(new Date());
        const next = menus.findIndex((menu) =>
          now.isSameOrBefore(menu.date, "date")
        );
        const startIndex = next + offset;

        return menus.slice(startIndex, startIndex + limit);
      }
    );
  }
}

export const MenuTitle: React.FunctionComponent<{ menu: Menu }> = ({
  menu,
}) => {
  const lang = useLang();

  const title = firstLetterUpperCase(
    dayjs(menu?.date).locale(lang).format("dddd D MMMM")
  );

  return <>{title}</>;
};