import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),

    onSuccess: (data) => {
      console.log(data);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Provided Email or password is incorrect");
    },
  });

  return { login, isLoading };
}
