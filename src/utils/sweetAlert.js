import swal from 'sweetalert2';

const confirmationMessage = ({
    title = 'Want to delete?',
    text = 'once done you cannot reverse this action',
    confirmText = 'Yes, delete',
    cancelText = 'No, cancel'
}) => {
    return swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmText,
        cancelButtonText: cancelText
    })
}

// success and error
const showSuccessMessage = ({ title = 'Successful Procedure', text = '', html = '' }) => {
    return swal.fire({
        title,
        text,
        html,
        icon: 'success',
    })
}

const showErrorMessage = ({ title = 'An error has occurred', text = '', html = '' }) => {
    return swal.fire({
        title,
        text,
        html,
        icon: 'error',
    })
}

const showWarningMessage = ({ title = 'Stop there', text = '', html = '' }) => {
    return swal.fire({
        title,
        text,
        html,
        icon: 'warning',
    })
}


/**
 * show sweetalert2 loading spinner
 * @param title
 * @param text
 */
const showLoading = ({ title = '', text = '' }) => {
    return swal.fire({
        title,
        text,
        onOpen: () => swal.showLoading()
    })
}

/**
 * hide sweetalert2 loading spinner
 */
const hideLoading = () => {
    return swal.close();
}

export {
    showLoading,
    hideLoading,
    confirmationMessage,
    showSuccessMessage,
    showErrorMessage,
    showWarningMessage
}