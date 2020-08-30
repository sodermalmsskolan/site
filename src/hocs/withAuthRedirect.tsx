import { useRouter } from "next/router";
import { NextPage } from "next";
import React, { ReactElement } from "react";
import { useAuth } from "../providers/Auth";
import { FullPageSpinner } from "../components/basic/Spinner";
import { FullPageWrapper } from "../components/layout/Container";
import { AutoLink } from "../components/basic/Link";
import { DISCORD_INVITE } from "../components/basic/Footer/Bottom";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/**
 * Support client-side conditional redirecting based on the user's
 * authenticated state.
 *
 * @param WrappedComponent The component that this functionality
 * will be added to.
 * @param LoadingComponent The component that will be rendered while
 * the auth state is loading.
 * @param expectedAuth Whether the user should be authenticated for
 * the component to be rendered.
 * @param location The location to redirect to.
 */
export default function withAuthRedirect<CP = {}, IP = CP>({
  WrappedComponent,
  LoadingComponent = FullPageSpinner,
  expectedAuth,
  location,
}: {
  WrappedComponent: NextPage<CP, IP>;
  LoadingComponent?: NextPage;
  expectedAuth: boolean;
  location: string;
}): NextPage<CP, IP> {
  const WithAuthRedirectWrapper: NextPage<CP, IP> = (props) => {
    const router = useRouter();

    const { isLoading, isAuthenticated, user } = useAuth();

    if (isLoading) {
      return <LoadingComponent />;
    }

    if (isBrowser() && expectedAuth !== isAuthenticated) {
      router.push(location);
      return <></>;
    }

    if (isBrowser() && expectedAuth !== user?.isMember) {
      return (
        <FullPageWrapper>
          <p>
            Du måste{" "}
            <AutoLink href={DISCORD_INVITE}>gå med i Discordservern</AutoLink>{" "}
            först.
          </p>
        </FullPageWrapper>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirectWrapper;
}
