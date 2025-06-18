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
                                Hack.EXE is a game where you try to crack a
                                secret password.
                            </p>
                            <p>
                                The password is made up of a series of characters; each
                                turn you attempt to guess the password. After each
                                guess you will be told:
                            </p>
                            <ul>
                                <li>
                                    <span class="text-success">
                                        <i class="bi bi-check-circle me-1" />
                                        Correct
                                    </span>
                                    : Highlighted characters are correct and in the
                                    correct position.
                                </li>
                                <li>
                                    <span class="text-warning">
                                        <i class="bi bi-exclamation-circle me-1" />
                                        Misplaced
                                    </span>
                                    : Highlighted characters are in the password, but in
                                    the wrong position.
                                </li>
                                <li>
                                    <span>
                                        <i class="bi bi-x-circle me-1" />
                                        Incorrect
                                    </span>
                                    : Unhighlighted characters are not in the password.
                                </li>
                            </ul>
                            <p class="mb-0">
                                You win when you guess the whole code.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show" />
        </>
    );
}
