import { useRouter } from "next/router";
import { useEffect } from "react";

export default function TokenPage() {
  const router = useRouter();
  const { token } = router.query;
  console.log(token);

  useEffect(() => {
    console.log(token);
    async function fetchData() {
      try {
        const response = await fetch(`/api/token?token=${token}`);
        if (response.ok) {
          const data = await response.json();
          // Handle the data as needed
          const { url } = data;
          window.location.href = url; // Redirect the user to the URL
        } else {
          // Handle error response
          console.error("Failed to fetch data");
        }
      } catch (error) {
        // Handle network or other errors
        console.error("An error occurred", error);
      }
    }

    if (token) {
      fetchData();
    }
  }, [token]);

  return null;
}
