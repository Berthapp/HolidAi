"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!("serviceWorker" in navigator)) {
      return;
    }

    const appVersion = process.env.NEXT_PUBLIC_APP_VERSION ?? "dev";
    const swUrl = `/sw.js?v=${encodeURIComponent(appVersion)}`;
    let isRefreshing = false;

    const onControllerChange = () => {
      if (isRefreshing) {
        return;
      }

      isRefreshing = true;
      window.location.reload();
    };

    const onLoad = async () => {
      try {
        const registration = await navigator.serviceWorker.register(swUrl);

        navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);

        if (registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }

        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (!newWorker) {
            return;
          }

          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              newWorker.postMessage({ type: "SKIP_WAITING" });
            }
          });
        });

        registration.update();
      } catch (error) {
        console.warn("Service worker registration failed:", error);
      }
    };

    window.addEventListener("load", onLoad);

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return null;
}
