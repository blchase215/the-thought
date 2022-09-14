// **User**:
const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought')

// Schema to create User model
const userSchema = new Schema(
    {
        userName: {
          type: String,
          unique: true,
          required: true,
          max_length: 50,
        },
        email: {
          type: String,
          unique: true,
          required: true,
          max_length: 80,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
      },

    {
        toJSON: {
            getters: true,
        }
    }
    );
// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)

// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

// ---