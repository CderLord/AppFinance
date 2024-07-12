export const reducer = (state: { openModal: boolean, modalName: string } | undefined, action: { type: "expense" | "register" | "closeModal" }) => {

    switch (action.type) {
        case "expense":
            return {
                ...state,
                openModal: true,
                modalName: "Nova Despesa",
                id: "despesa",
            }
        case "register":
            return {
                ...state,
                openModal: true,
                modalName: "Nova Receita",
                id: "receita",
            }
        case "closeModal":
            return {
                ...state,
                openModal: false,
                modalName: '',
                id: "0",
            }


        default:
            return {
                ...state,
                openModal: false,
                modalName: '',
                id: "0",
            }
    }


}