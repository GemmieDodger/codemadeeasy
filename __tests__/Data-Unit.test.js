import React from "react";
import { render, screen } from '@testing-library/react';
import firebase from "../src/Firebase";

describe('Firebase connection', () => {
  test('Can reach quiz data from firebase.', () => {
    const onCollectionUpdate = (querySnapshot) => {
        const quizzes = []
        expect(quizzes.length).toBe(0)
        querySnapshot.forEach((doc) => {
          const { quizName } = doc.data();
          quizzes.push({
            key: doc.id,
            doc, // DocumentSnapshot
            quizName,
          });
        });
        expect(quizzes.length).toBeGreaterThan(0)
      };

    const ref = firebase.firestore().collection("quizzes");
    ref.get().then((doc) => {
      if (!doc.exists) {
        /* No action in test */
      }
    });
    ref.onSnapshot(onCollectionUpdate);
});
})
