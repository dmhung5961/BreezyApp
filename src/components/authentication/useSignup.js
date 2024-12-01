import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { isLoading: isSigningUp, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        `Account successfully created! Please verify new account from the user's email address`,
        { icon: "🎊" }
      );
    },
  });

  return { isSigningUp, signup };
}
