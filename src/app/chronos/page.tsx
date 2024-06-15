import Navbar from "@/layout/Navbar";
import {
  fetchCourseScheduleHTML,
  fetchItineraryHTML,
  parseCourseSchedule,
  parseItinerary,
} from "@/actions/infesparser";
import { Itinerary } from "@/types/infes/itinerary";
import { DateTime } from "luxon";
import Chronos from "./chronos";

export default function ChronosPage() {
  return (
    <>
      <Navbar />
      <Chronos />
    </>
  );
}

export const metadata = {
  title: "Chronos | Facultat de Matemàtiques i Informàtica",
};
