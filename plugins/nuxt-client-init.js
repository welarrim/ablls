export default async (ctx) => {
  await ctx.store.dispatch('teams/fetch')
  await ctx.store.dispatch('childs/fetch')
  await ctx.store.dispatch('skills/fetch')
  await ctx.store.dispatch('tasks/fetch')
  await ctx.store.dispatch('evaluations/fetch')
}
