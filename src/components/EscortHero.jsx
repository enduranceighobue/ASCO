import React from "react";
import aboutbg from "../assets/aboutbg.svg";

export default function EscortHero() {
    return (
        <section className="relative w-full md:h-[270px] overflow-hidden bg-[#1D2140]">
            {/* BACKGROUND IMAGE + OVERLAY */}
            <div className="absolute   h-full  " />
            <img
                src={aboutbg}
                alt=""
                className="absolute -right-10   object-cover w-100 h-100 md:block hidden "
            />
            <div />

            {/* HERO CONTENT */}
            <div className="relative z-30 max-w-6xl mx-auto px-6 text-center pt-16 md:pt-24 pb-6">
                <h1 className=" md:text-4xl font-bold text-white mb-4">
                    Escort & VIP Protection Services{" "}
                </h1>
                <p className="text-white  md:text-xl max-w-3xl mx-auto opacity-60">
                    Secure escort solutions tailored for safety, professionalism, and
                    control.
                </p>
            </div>

        </section>
    );
}
