// // Third-party packages
// import { useMutation } from "@tanstack/react-query";

// // Custom packages
// import {
//   patchPasswordReset,
//   postLoginDetail,
//   postPasswordLost,
//   postSignUpDetail,
// } from "@/api";
// import { toast } from "sonner-native";

// export function useLoginMutation() {
//   return useMutation({
//     mutationFn: (data: any) => postLoginDetail(data),
//     onSuccess: (data: any) =>
//       localStorage.setItem("access_token_jp", data.access_token),
//   });
// }

// export function useSignUpMutation() {
//   return useMutation({
//     mutationFn: (data: any) => postSignUpDetail(data),
//     onSuccess: (data: any) =>
//       localStorage.setItem("access_token_jp", data.access_token),
//   });
// }

// export function usePostPasswordLostMutation() {
//   return useMutation({
//     mutationFn: async (data: any) => postPasswordLost(data),
//     onSuccess: (data) => {
//       toast.success(`${data.message}`);
//     },
//     onError: (error: any) => {
//       toast.error(`${error?.response?.data?.message} `);
//     },
//   });
// }

// export function usePatchPasswordResetMutation() {
//   return useMutation({
//     mutationFn: async (data: any) => patchPasswordReset(data),
//   });
// }
