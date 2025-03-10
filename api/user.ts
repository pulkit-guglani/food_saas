import { ApiHandler } from "@/lib/api-handler";

export async function getUserDetail() {
  const handler = new ApiHandler({
    path: "/v3/jp/users/profile",
  });
  const hasLocalStorage =
    typeof localStorage !== "undefined" &&
    localStorage.getItem("access_token_jp") !== null;
  if (!hasLocalStorage) return null;
  const { data } = await handler.get();
  return data;
}

export async function patchUserProfile(payload: any) {
  const handler = new ApiHandler({
    path: `/js/users/profile`,
    data: payload,
  });
  const { data } = await handler.patch();
  return data;
}

export async function patchUserProfileImage(payload: any) {
  const handler = new ApiHandler({
    path: `/js/users/us/image`,
    data: payload,
  });
  const { data } = await handler.patch();
  return data;
}

export async function getUserProfileDetail() {
  const handler = new ApiHandler({
    path: `/v2/js/users/profile/detail`,
  });
  const { data } = await handler.get();
  return data;
}
