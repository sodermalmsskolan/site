import { OAUTH2_OPTIONS } from "./options";
import got from "got";

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

export const fetchToken = async (code: string) => {
  const response = await got
    .post("https://discord.com/api/oauth2/token", {
      form: {
        client_id: OAUTH2_OPTIONS.id,
        client_secret: OAUTH2_OPTIONS.secret,
        grant_type: "authorization_code",
        code,
        redirect_uri: OAUTH2_OPTIONS.callback,
        scope: OAUTH2_OPTIONS.scope,
      },
    })
    .json<TokenResponse>();

  return response;
};
