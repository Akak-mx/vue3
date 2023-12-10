export default {
    template: `
        <section v-show="inProgressAssignments.length">
            <h2 class="font-bold">
                In progress
            </h2>
            <ul>
                <label>
                    <li
                        v-for="assignment in inProgressAssignments"
                        :key=assignment.id
                    >
                        {{ assignment.name }}
                        <input type="checkbox" v-model=assignment.complete>
                    </li>
                </label>
            </ul>
        </section>
        <section v-show="completedAssignments.length">
            <h2 class="font-bold mt-8">completed</h2>
            <ul>
                <label>
                    <li
                        v-for="assignment in completedAssignments"
                        :key=assignment.id
                    >
                        {{ assignment.name }}
                        <input type="checkbox" v-model=assignment.complete>
                    </li>
                </label>
            </ul>
        </section>
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
        inProgressAssignments () {
            return this.assignments.filter((a) => ! a.complete)
        },

        completedAssignments () {
            return this.assignments.filter((a) => a.complete)
        }
    }
}
