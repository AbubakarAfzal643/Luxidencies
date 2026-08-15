import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "./Button";

function HeroSearchWidget() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
  });

  const locationOptions = [
    "Lahore",
    "Islamabad",
    "Murree",
    "Gulberg",
    "MM Alam",
    "DHA Phase III",
    "DHA Phase VII",
    "Johar Town",
    "Bahria Town",
    "Model Town",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();

    if (form.location) params.set("location", form.location);
    if (form.checkIn) params.set("checkIn", form.checkIn);
    if (form.checkOut) params.set("checkOut", form.checkOut);
    if (form.guests) params.set("guests", String(form.guests));

    navigate(`/apartments?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-10 rounded-[1.75rem] border border-neutral-200 bg-white/95 p-4 shadow-[0_22px_45px_rgba(17,17,17,0.08)] backdrop-blur-sm md:p-5"
      aria-label="Search apartments"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <label className="form-field">
          Location
          <div className="relative">
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
              className="input appearance-none pr-10 text-neutral-900"
            >
              <option value="">City or area</option>
              {locationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-700">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  d="M5.5 7.5L10 12l4.5-4.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </label>

        <label className="form-field">
          Check-in
          <input
            type="date"
            name="checkIn"
            value={form.checkIn}
            onChange={handleChange}
            className="input"
          />
        </label>

        <label className="form-field">
          Check-out
          <input
            type="date"
            name="checkOut"
            value={form.checkOut}
            onChange={handleChange}
            className="input"
          />
        </label>

        <label className="form-field">
          Guests
          <input
            type="number"
            min={1}
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="input"
          />
        </label>
      </div>

      <div className="mt-4 w-full">
        <button
          type="submit"
          className="h-10 w-full px-4 text-md font-extrabold cursor-pointer bg-amber-500 text-neutral-950 hover:bg-black hover:text-white focus-visible:ring-amber-500 rounded-2xl"
        >
          Search Apartments
        </button>
      </div>
    </form>
  );
}

export default HeroSearchWidget;
