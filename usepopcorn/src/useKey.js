import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      document.addEventListener("keydown", function (e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }

        return function () {
          document.removeEventListener("keydown");
        };
      });
    },
    [action, key]
  );
}
