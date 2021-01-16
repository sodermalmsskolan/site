import { NextPage } from "next";
import React from "react";
import AccountSettingsPage from "../../components/account/settings/AccountSettingsPage";

/**
 * General account settings.
 *
 * @returns {React.ReactElement} The rendered page.
 */
const Page: NextPage = () => (
  <AccountSettingsPage title="Allmänt">
    allmänna inställningar
  </AccountSettingsPage>
);

export default Page;
