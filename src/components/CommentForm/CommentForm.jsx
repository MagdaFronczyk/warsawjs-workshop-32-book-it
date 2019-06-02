import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from 'store/actions';

const CommentForm = (props) => {
    const [comment, setComment] = useState("");
    const { comments, addComment } = props;

    return (
        <div>
            <h3>Add a comment</h3>
            <textarea value={comment} onChange={() => setComment(event.target.value)} cols="30" rows="10"></textarea>
            <button onClick={() => { addComment(comment); setComment('') }}>Add</button>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    comments: state.comments.list
});

const mapDispatchToProps = dispatch => ({
    addComment: (comment) => dispatch(addComment(comment))
});

const CommentRedux = connect(mapStateToProps, mapDispatchToProps)(CommentForm);

export { CommentRedux as CommentForm };
