import { Role, IDiscordAPIRole } from "../shared/Role";
import got from "got";
import { DISCORD_GUILD, AUTHORIZATION_HEADER } from "../../credentials";
import { Permissions } from "discord.js";
import { ServerUser } from "./User";
import { ServerMember } from "./Member";

export class ServerRole extends Role {
  public static async fetchAll(): Promise<ServerRole[]> {
    const data = await got
      .get(`https://discord.com/api/guilds/${DISCORD_GUILD}/roles`, {
        headers: {
          Authorization: AUTHORIZATION_HEADER,
        },
      })
      .json<IDiscordAPIRole[]>();

    return data.map((role) => new ServerRole(role));
  }

  public get permissions() {
    return new Permissions(this.permissionBits);
  }

  public static async fetchBotRoles(): Promise<Role[]> {
    const [member, roles] = await Promise.all([
      ServerMember.me(),
      ServerRole.fetchAll(),
    ]);

    return member.roles.map((roleId) =>
      roles.find((role) => role.id === roleId)
    );
  }
}