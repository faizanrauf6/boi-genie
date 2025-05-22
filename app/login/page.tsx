import GuestRoute from "@/components/GuestRoute";
import LoginPage from "@/components/LoginPage";

export default function Page() {
  return (
    <GuestRoute>
      <LoginPage />
    </GuestRoute>
  );
}
