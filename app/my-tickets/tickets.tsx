import { getSession } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function MyTickets() {
  return (
    <>
    <html>
  <head>
   
    <title>Galileo Design</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  </head>
  <body>
    <div className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233748] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">EventHub</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">My Events</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Discover</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Friends</a>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <a className="text-[#92b0c9] text-base font-medium leading-normal" href="#">My Events</a>
              <span className="text-[#92b0c9] text-base font-medium leading-normal">/</span>
              <span className="text-white text-base font-medium leading-normal">Vouchers</span>
            </div>
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">My Vouchers</p></div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Search Vouchers"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#324f67] bg-[#192833] focus:border-[#324f67] h-14 placeholder:text-[#92b0c9] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#324f67] px-4 gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#117cd4] text-white pb-[13px] pt-4" href="#">
                  <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">Active</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92b0c9] pb-[13px] pt-4" href="#">
                  <p className="text-[#92b0c9] text-sm font-bold leading-normal tracking-[0.015em]">Redeemed</p>
                </a>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Upcoming Events</h2>
            <div className="flex gap-4 bg-[#111a22] px-4 py-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
              ></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal">Liam Carter Festival - 20% Off Merchandise</p>
                <p className="text-[#92b0c9] text-sm font-normal leading-normal">General Admission: Includes access to main stage and food court.</p>
                <p className="text-[#92b0c9] text-sm font-normal leading-normal">Friday, July 12 · 8:00 PM</p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#111a22] px-4 py-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
              ></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal">The Sonic Pulse Concert - Free Drink Voucher</p>
                <p className="text-[#92b0c9] text-sm font-normal leading-normal">VIP: Includes backstage pass and signed poster.</p>
                <p className="text-[#92b0c9] text-sm font-normal leading-normal">Saturday, August 3 · 7:00 PM</p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#111a22] px-4 py-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
              ></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal">Harmonic Symphony Orchestra - Discounted Program Book</p>
                <p className="text-[#92b0c9] text-sm font-normal leading-normal">Gold: Includes priority seating and complimentary appetizer.</p>
                <p className="text-[#92b0c9] text-sm font-normal leading-normal">Sunday, September 15 · 6:30 PM</p>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Ongoing</h2>
            <div className="flex gap-4 bg-[#111a22] px-4 py-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
              ></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal">EventHub+ - 30% Off Your First Month</p>
                <p className="text-[#92b0c9] text-sm font-normal leading-normal">Discount applies to all new subscription sign-ups.</p>
                <p className="text-[#92b0c9] text-sm font-normal leading-normal">Valid: June 1 - July 31</p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#111a22] px-4 py-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
              ></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal">EventHub Merchandise - 15% Off T-shirts</p>
                <p className="text-[#92b0c9] text-sm font-normal leading-normal">Use code 'SUMMERFUN' at checkout for the discount.</p>
                <p className="text-[#92b0c9] text-sm font-normal leading-normal">Valid: July 1 - September 30</p>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#324f67] px-6 py-14">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                  <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">No vouchers yet</p>
                  <p className="text-white text-sm font-normal leading-normal max-w-[480px] text-center">
                    Browse through our featured events and grab those tickets to start receiving exclusive perks.
                  </p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#233748] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Explore Events</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#92b0c9] text-base font-normal leading-normal min-w-40" href="#">About</a>
                <a className="text-[#92b0c9] text-base font-normal leading-normal min-w-40" href="#">Jobs</a>
                <a className="text-[#92b0c9] text-base font-normal leading-normal min-w-40" href="#">Support</a>
                <a className="text-[#92b0c9] text-base font-normal leading-normal min-w-40" href="#">Developers</a>
                <a className="text-[#92b0c9] text-base font-normal leading-normal min-w-40" href="#">Advertising</a>
                <a className="text-[#92b0c9] text-base font-normal leading-normal min-w-40" href="#">Investors</a>
                <a className="text-[#92b0c9] text-base font-normal leading-normal min-w-40" href="#">Vendors</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#92b0c9]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#92b0c9]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#92b0c9]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#92b0c9] text-base font-normal leading-normal">@2024 EventHub. All rights reserved</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  </body>
</html>
    </>
  );
}
