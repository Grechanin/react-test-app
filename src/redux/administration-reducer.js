const COLUMN_DISPLAY_TOGGLE = 'COLUMN_DISPLAY_TOGGLE';
const COLUMN_TEXT_COLOR_CHANGE = 'COLUMN_TEXT_COLOR_CHANGE';

let initialState = {
    activeColums: [{
        id: 1,
        column: 'name',
        isActive: true
    },{
        id: 2,
        column: 'surname',
        isActive: true
    },{
        id: 3,
        column: 'age',
        isActive: true
    },{
        id: 4,
        column: 'isActive',
        isActive: true
    }],
    columsColors: [{
        id: 1,
        column: 'name',
        color: 'black'
    },{
        id: 2,
        column: 'surname',
        color: 'black'
    },{
        id: 3,
        column: 'age',
        color: 'black'
    },{
        id: 4,
        column: 'isActive',
        color: 'black'
    }]
};

const administrationReducer = (state = initialState, action) => {
    switch (action.type) {

        case COLUMN_DISPLAY_TOGGLE:
            const newState = state.activeColums.map(col => {
                const column = action.data.column;
                if (col.column === column) {
                    col.isActive = !col.isActive;
                }
                return col;
            });

            return {
                ...state,
                activeColums: newState
            }

        case COLUMN_TEXT_COLOR_CHANGE:
            const colorState = state.columsColors.map(col => {
                const column = action.data.column;
                const color = action.data.color;
                if (col.column === column) {
                    col.color = color;
                }
                return col;
            });

            return {
                ...state,
                columsColors: colorState
            }

        default:
            return state;
    }
}


export const columnDisplayToggle = (column) => ({type: COLUMN_DISPLAY_TOGGLE, data: { column }});
export const columnTextColorChange = (column, color) => ({type: COLUMN_TEXT_COLOR_CHANGE, data: { column, color }});


export default administrationReducer;
