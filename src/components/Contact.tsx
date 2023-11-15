"use client";

import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

import Bounded from "./Bounded";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Bounded className="bg-indigo-700 relative overflow-hidden">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <motion.div
          className="max-w-xl lg:max-w-lg"
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-100">
            We{"'"}d love to hear from you! Whether you have questions,
            feedback, or want to discuss potential opportunities, feel free to
            reach out to us. We{"'"}re here to assist you in any way we can.
          </p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-slate-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-800 sm:text-sm sm:leading-6"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-slate-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-800 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="mobile-number" className="sr-only">
              Mobile number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="text"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-slate-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-800 sm:text-sm sm:leading-6"
              placeholder="Enter your mobile"
            />
          </div>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="mobile-number" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-slate-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-800 sm:text-sm sm:leading-6"
              placeholder="Enter your message"
            />
          </div>
          <div className="mt-6 flex max-w-md gap-x-4">
            <Button
              color="text-indigo-600"
              bg="bg-white"
              hoverBg="hover:bg-gray-100"
            >
              Submit
            </Button>
          </div>
        </motion.div>
        <motion.dl
          className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, staggerChildren: 0.25 }}
        >
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <CalendarDaysIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
            <dd className="mt-2 leading-7 text-gray-100">
              Non laboris consequat cupidatat laborum magna. Eiusmod non irure
              cupidatat duis commodo amet.
            </dd>
          </motion.div>
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <HandRaisedIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <dt className="mt-4 font-semibold text-white">No spam</dt>
            <dd className="mt-2 leading-7 text-gray-100">
              Officia excepteur ullamco ut sint duis proident non adipisicing.
              Voluptate incididunt anim.
            </dd>
          </motion.div>
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <CalendarDaysIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
            <dd className="mt-2 leading-7 text-gray-100">
              Non laboris consequat cupidatat laborum magna. Eiusmod non irure
              cupidatat duis commodo amet.
            </dd>
          </motion.div>
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
          >
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <HandRaisedIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <dt className="mt-4 font-semibold text-white">No spam</dt>
            <dd className="mt-2 leading-7 text-gray-100">
              Officia excepteur ullamco ut sint duis proident non adipisicing.
              Voluptate incididunt anim.
            </dd>
          </motion.div>
        </motion.dl>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </Bounded>
  );
}
