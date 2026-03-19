self.addEventListener('push', e => {
  const data = e.data?.json() || {};
  self.registration.showNotification(data.title || 'Picha Entertainment', {
    body: data.body || 'New content available',
    icon: data.icon || '/icon.png',
    badge: '/icon.png',
    data: { url: data.url || '/' },
  });
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url));
});
