import Image from "next/image";

export default function Home() {
  return (
      <div className="grid md:grid-cols-4 gap-3 my-15">
          <div className="">
              <div className="font-bold text-3xl bg-green-100 text-center">
                  All Category
              </div>
          </div>
          <div className="col-span-2">
              <div className="font-bold text-3xl bg-green-100 text-center">
                  All News
              </div>
          </div>
          <div>
              <div className="font-bold text-3xl bg-green-100 text-center">
                  Social icons
              </div>
          </div>
      </div>
  );
}
