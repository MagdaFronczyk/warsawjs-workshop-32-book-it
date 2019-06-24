import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment, removeComment } from 'store/actions';

const CommentForm = ({ comments, addComment, removeComment }) => {
    const [comment, setComment] = useState("");

    return (
        <div>
            <h3>Add a comment</h3>
            <textarea value={comment} onChange={() => setComment(event.target.value)} cols="30" rows="10"></textarea>
            <button onClick={() => { addComment(comment); setComment('') }}>Add</button>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <p>{comment}</p>
                        <button onClick={() => removeComment(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    comments: state.comments.list
});

const mapDispatchToProps = dispatch => ({
    addComment: (comment) => dispatch(addComment(comment)),
    removeComment: (index) => dispatch(removeComment(index))
});

const CommentRedux = connect(mapStateToProps, mapDispatchToProps)(CommentForm);

export { CommentRedux as CommentForm };
