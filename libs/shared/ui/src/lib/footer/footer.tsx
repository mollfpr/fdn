import { BottomFrame } from '../..';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className="border-t-2 border-gray-200">
      <div className="pt-6 pb-12 max-w-7xl mx-auto">
        <div className="flex mb-8">
          <div className="w-2/3 flex justify-between pr-40">
            <ul className="leading-8">
              <li>
                <a href="#" className="font-bold text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-sm">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-sm">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="leading-8">
              <li>
                <a href="#" className="font-bold text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-sm">
                  Help
                </a>
              </li>
            </ul>

            <ul className="leading-8">
              <li>
                <a href="#" className="font-bold text-sm">
                  Awards
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-sm">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/3 flex flex-col">
            <span className="text-sm font-bold leading-8 mb-2">
              Download Our Mobile App
            </span>
            <div className="flex gap-x-4">
              <a href="https://itunes.apple.com/id/app/female-daily-beauty-review/id1160742672?l=id&amp;mt=8">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/btn_appstore.png"
                  alt="Button Appstore"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.fdbr.android&amp;hl=en_GB">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/btn_playstore.png"
                  alt="Button Playstore"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex ">
          <div className="w-2/3 pr-40 flex flex-col gap-y-3">
            <img
              src="/assets/images/female-daily.png"
              alt=""
              className="w-max h-6"
            />
            <span className="text-sm text-gray-500">
              Copyright © 2015 - 2021 Female Daily Network ∙ All the rights
              reserved
            </span>
          </div>
          <div className="w-1/3 flex items-center gap-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-blue-600"></a>
            <a href="#" className="w-8 h-8 rounded-full bg-blue-200"></a>
            <a href="#" className="w-8 h-8 rounded-full bg-blue-300"></a>
            <a href="#" className="w-8 h-8 rounded-full bg-red-500"></a>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <BottomFrame />
      </div>
    </div>
  );
}

export default Footer;
