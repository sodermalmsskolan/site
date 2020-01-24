import styles from "./Navigation.module.css";
import React from "react";
import { Text } from "./Text";
import Link from "next/link";

export class Navigation extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <ul className={styles.ul}>
          <NavLink href="/">Start</NavLink>
          <NavLink href="https://södermalmsskolan.com/blogg">Blogg</NavLink>
          <NavLink href="https://discord.gg/4hEnTpd">Discord</NavLink>
        </ul>
      </div>
    );
  }
}

class NavLink extends React.Component<{
  href: string;
  children: string;
}> {
  render() {
    return (
      <li className={styles.li}>
        <Link href={this.props.href}>
          <a className={styles.a}>
            <Text>{this.props.children}</Text>
          </a>
        </Link>
      </li>
    );
  }
}
