export default function (tasks, filter) {

  for (let value of Object.keys(filter)) {
    // if (value === 'assignee') {
    //   tasks = tasks.filter(t => t[value].id === Number(filter[value]))
    // } else if (value === 'search') {
    //   if (filter[value].length) {
    //     tasks = tasks.filter(item => item.name.toLowerCase().indexOf(filter[value].toLowerCase().trim()) + 1)
    //   } else {
    //     delete filter[value]
    //   }
    // } else {
    //   tasks = tasks.filter(t => t[value].id === Number(filter[value]))
    // }

    if (value === 'search') {
      if (filter[value].length) {
        tasks = tasks.filter(item => item.name.toLowerCase().indexOf(filter[value].toLowerCase().trim()) + 1)
      } else {
        delete filter[value]
      }
    } else {
      tasks = tasks.filter(t => t[value].id === Number(filter[value]))
    }
  }

  return tasks
}
