/** Props for HelpDialog component */
interface HelpDialogProps {
    /** Function to close the dialog */
    close: () => void;
}

export function HelpDialog(props: HelpDialogProps) {
    return (
        <>
            <div class="modal d-block" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">Help</h3>
                            <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                                onClick={props.close}
                            ></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                Mastermind is a game where you try to guess a
                                secret code.
                            </p>
                            <p>
                                The code is made up of a series of numbers; each
                                turn you attempt to guess the code. After each
                                guess you will be told:
                            </p>
                            <ul>
                                <li>
                                    <span class="text-success">
                                        <i class="bi bi-check-circle me-1" />
                                        Correct
                                    </span>
                                    : How many numbers are correct and in the
                                    correct position.
                                </li>
                                <li>
                                    <span class="text-warning">
                                        <i class="bi bi-exclamation-circle me-1" />
                                        Misplaced
                                    </span>
                                    : How many numbers are in the code, but in
                                    the wrong position.
                                </li>
                                <li>
                                    <span class="text-danger">
                                        <i class="bi bi-x-circle me-1" />
                                        Incorrect
                                    </span>
                                    : How many numbers are not in the code.
                                </li>
                            </ul>
                            <p class="mb-0">
                                You win if you can guess the whole code!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show" />
        </>
    );
}
