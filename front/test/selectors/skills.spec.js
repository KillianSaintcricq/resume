import expect from 'expect';
import { visibleSkillsSelector } from '../../selectors/skills';

describe('skills selector', () => {

    it('should select skills having all of their tags selected', () => {

        expect(
            visibleSkillsSelector(
                {
                    tags: {
                        isFetching: false,
                        values: [
                            {
                                id: 1,
                                title: 'frameworks',
                                selected: true
                            },
                            {
                                id: 2,
                                title: 'back-end',
                                selected: true
                            },
                            {
                                id: 3,
                                title: 'programming languages',
                                selected: false
                            },
                            {
                                id: 4,
                                title: 'front-end',
                                selected: true
                            }
                        ]
                    },
                    skills: {
                        isFetching: false,
                        values: [
                            {
                                id: 1,
                                title: 'Java',
                                votes: 1,
                                tags: ['back-end', 'programming languages']
                            },
                            {
                                id: 2,
                                title: 'Laravel',
                                votes: 6,
                                tags: ['back-end', 'frameworks']
                            },
                            {
                                id: 3,
                                title: 'Javascript',
                                votes: 10,
                                tags: ['programming languages']
                            },
                            {
                                id: 4,
                                title: 'React',
                                votes: 4,
                                tags: ['front-end', 'frameworks']
                            },
                            {
                                id: 5,
                                title: 'HTML5 / CSS3',
                                votes: 6,
                                tags: ['front-end', 'programming languages']
                            }
                        ]
                    }
                }
            )
        ).toEqual(
            {
                tags: {
                    isFetching: false,
                    values: [
                        {
                            id: 1,
                            title: 'frameworks',
                            selected: true
                        },
                        {
                            id: 2,
                            title: 'back-end',
                            selected: true
                        },
                        {
                            id: 3,
                            title: 'programming languages',
                            selected: false
                        },
                        {
                            id: 4,
                            title: 'front-end',
                            selected: true
                        }
                    ]
                },
                skills: {
                    isFetching: false,
                    values: [
                        {
                            id: 2,
                            title: 'Laravel',
                            votes: 6,
                            tags: ['back-end', 'frameworks']
                        },
                        {
                            id: 4,
                            title: 'React',
                            votes: 4,
                            tags: ['front-end', 'frameworks']
                        }
                    ]
                }
            }
        );

    });

});