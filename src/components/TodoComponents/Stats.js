import React from 'react';

import { Statistic } from 'semantic-ui-react';
import styled from 'styled-components';

const Stats = () => {

    return (
       <Statistic.Group>
           <Statistic>
               <Statistic.Value>10</Statistic.Value>
               <Statistic.Label>ToDos Completed</Statistic.Label>
           </Statistic>
           <Statistic>
                <Statistic.Value>10</Statistic.Value>
                <Statistic.Label>ToDos Left</Statistic.Label>
           </Statistic>
       </Statistic.Group> 
    );
}

export default Stats;