import Assignment from "./Assignment.js";

export default {

    components: {
        Assignment,
    },

    template: `
        <section v-show="assignments.length">

            <h2 class="font-bold mt-8">
                {{ title}}
            </h2>

            <ul>
                <assignment
                    v-for="assignment in assignments"
                    :assignment="assignment"
                    :key="assignment.id"
                >
                </assignment>
            </ul>

        </section>
    `,

    props: {
        assignments: Array,
        title: String,
    }
}
