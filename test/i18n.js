import local from '@/locales/fr-FR'
const $t = (path) => {
  const paths = path.split('.')
  let current = local
  let i

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined
    } else {
      current = current[paths[i]]
    }
  }
  return current
}
export default {
  mocks: {
    $t,
  },
}
