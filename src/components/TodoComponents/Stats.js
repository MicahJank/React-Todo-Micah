import React from 'react';

import { Statistic } from 'semantic-ui-react';
import styled from 'styled-components';

const Stats = ( { completedTodos } ) => {

    return (
       <Statistic.Group>
           <Statistic>
               <Statistic.Value>{completedTodos(true).length}</Statistic.Value>
               <Statistic.Label>ToDos Completed</Statistic.Label>
           </Statistic>
           <Statistic>
                <Statistic.Value>{completedTodos(false).length}</Statistic.Value>
                <Statistic.Label>ToDos Left</Statistic.Label>
           </Statistic>
       </Statistic.Group> 
    );
}

export default Stats;