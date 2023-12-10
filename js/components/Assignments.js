import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList,
    },

    template: `
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    `,


    data() {
        return {
          assignments: [
              { id: 1, name: 'Learn to install vue', complete: false },
              { id: 2, name: 'Lear to use Vue', complete: false },
              { id: 3, name: 'Use vue on my new apps', complete: false },
          ]
        }
      },

    computed: {

        filters () {
            return {
                'inProgress': this.assignments.filter((a) => ! a.complete),
                'completed': this.assignments.filter((a) => a.complete),
            }
        }
    }
}
