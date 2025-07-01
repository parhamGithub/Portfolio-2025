import { useRouteError } from "react-router";


interface RouteError {
  statusText?: string;
  message?: string;
  status?: number;
  data?: any;
}

export default function StickerStoreNotFound() {
  const error = useRouteError() as RouteError;

  return (
    <div id="error-page" className="text-center mt-10">
      <h1>وای نه! 😳</h1>
      <p>
        صفحه ایی که دنبالش هستی رو نمیتونم پیدا کنم. مطمئنی درست اومدی ؟؟ 🤗
      </p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}