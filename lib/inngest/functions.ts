import {inngest} from "@/lib/inngest/client";


export const sendSignUpEmail = inngest.createFunction(
    { id: 'sign-up-email'},
    { event: 'app/user.created'},
    async ({event,step}) => {
        const userProfile =
            ' -Country: ${event.data.country}
        - Investment goals: ${event.data.investmentGoals}
        - Risk tolerance: ${event.data.riskTolerance}
        - preferred industry: ${event.data.preferredIndustry}
        '
    }
)

/* THIS FILE I USE LAST TIME */