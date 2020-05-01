`use  strict`

const courses = [
  {
    _id: 'any id',
    title: 'Mi titulo',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  },
  {
    _id: 'any id',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  },
  {
    _id: 'any id',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programacion'
  }
]

module.exports = {
  getCourses: () => {
    return courses
  }
}