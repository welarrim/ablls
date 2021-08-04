export default function ({ store, route, redirect }) {
  const guestPaths = [
    '/login',
    '/register',
  ]
  if (store.state.user) {
    if (guestPaths.includes(route.path)) {
      redirect('/')
    }
  } else if (!guestPaths.includes(route.path)) {
    redirect('/login')
  }
}
