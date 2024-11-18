import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { updateBooking } from "../../services/apiBookings";

export function useCheckIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isCheckingIn, mutate: checkin } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Check-in successful for booking ${data.id}`);
      queryClient.invalidateQueries({ active: true }); //*Invalidate all the queries that are currently active on the page
      navigate("/");
    },
    onError: () =>
      toast.error("There was an error while checking in the booking"),
  });

  return { isCheckingIn, checkin };
}
