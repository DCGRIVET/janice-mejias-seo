import { FeedbackForm } from "@/components/FeedbackForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Share your feedback",
  description: "Tell us how we did.",
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <FeedbackForm />
      </main>
      <SiteFooter />
    </div>
  );
}
