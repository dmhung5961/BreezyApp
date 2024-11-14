import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckOut() {
  const queryClient = useQueryClient();

  const { isLoading: isCheckingOut, mutate: checkout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Check-out successfully for booking ${data.id}`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () =>
      toast.error("There was an error while checking out the booking"),
  });

  return { isCheckingOut, checkout };
}
