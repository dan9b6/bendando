import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

import Bounded from "../Bounded";

type FeaturesProps = {
  children: React.ReactNode;
  features: {
    name: string;
    description: string;
    icon: React.ElementType;
  }[];
};

export default function Features({ features, children }: FeaturesProps) {
  return (
    <Bounded className="bg-white">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Lets take a look
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Every key feature of this project
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">{children}</p>
      </div>
      <div className="mx-auto w-full">
        <dl className="grid my-12 w-full grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Bounded>
  );
}
