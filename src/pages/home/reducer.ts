export const reducer = (state: { openModal: boolean, modalName: string } | undefined, action: { type: "expense" | "register" | "closeModal" }) => {

    switch (action.type) {
        case "expense":
            return {
                ...state,
                openModal: true,
                modalName: "Nova Despesa"

            }
        case "register":
            return {
                ...state,
                openModal: true,
                modalName: "Nova Receita"
            }
        case "closeModal":
            return {
                ...state,
                openModal: false,
                modalName: ''
            }


        default: break
    }


}