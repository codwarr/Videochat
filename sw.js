self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => {});

self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};
  self.registration.showNotification(data.title || "تماس جدید", {
    body: data.body || "یک تماس جدید دارید",
    icon: "icon.png"
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();