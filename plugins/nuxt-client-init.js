export default async (ctx) => {
  console.log('INIT')
  await ctx.store.dispatch('childs/fetch')
  await ctx.store.dispatch('skills/fetch')
  await ctx.store.dispatch('tasks/fetch')
  await ctx.store.dispatch('evaluations/fetch')
}
