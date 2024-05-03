import React from "react";
import "./Body.css";
function Body() {
  return (
    <>
      <div className="con">
        <a href="src\components\SJF(H).html" className="hatao">
          <div className="card">
            <div className="text">
              <h1>SJF</h1>
            </div>
            <div className="para">
              <p>
                The user generated list of processes is passed to the scheduler
                when the SJF scheduler is invoked. The process are then sorted
                in increasing order of arrival time. Until all the processes are
                not finished, at each clock cycle, the whole list of processes
                is sampled and if there are any new arrivals, they are added to
                the queue which is sorted in increasing order of burst time. The
                first element of the queue is always processed first, hence the
                name Shortest Job First. If the queue is non-empty, then the
                remaining time of the first processes is decremented at each
                clock cycle. As soon as the first element of the queue is
                completely processed, its resultant attributes are calculated,
                the Gantt Chart entry is made, and the element is popped from
                the queue. If the queue is empty, the clock simply moves on to
                the next clock cycle. This procedure is repeated until all the
                process are finished executing.
              </p>
            </div>
          </div>
        </a>
        <a href="src\components\Dining(H).html" className="hatao">
          <div className="card">
            <div className="text1">
              <h1>Dining Philosopher</h1>
            </div>
            <div className="para">
              <p>
                Initialize the semaphores for each fork to 1 (indicating that
                they are available). Initialize a binary semaphore (mutex) to 1
                to ensure that only one philosopher can attempt to pick up a
                fork at a time. For each philosopher, create a separate thread
                that executes the following algorithm: While true: Think for a
                random amount of time. Acquire the mutex semaphore to ensure
                that only one philosopher can attempt to pick up a fork at a
                time. Attempt to acquire the semaphore for the fork to the left.
                If successful, attempt to acquire the semaphore for the fork to
                the right. If both forks are acquired successfully, eat for a
                random amount of time and then release both semaphores in the
                same order. Then release the mutex semaphore and go back to
                thinking.
              </p>
            </div>
          </div>
        </a>
        <a href="src\components\Clook(H).html" className="hatao">
          <div className="card">
            <div className="text">
              <h1>C-LOOK</h1>
            </div>
            <div className="para">
              <p>
                Determine the initial position of the disk head. Sort the
                pending disk requests in the order in which they will be
                serviced with respect to the current head position. Scan the
                disk in the chosen direction, servicing requests as they are
                encountered. When the last request in the current direction has
                been serviced, immediately return to the beginning of the disk
                and repeat the process.
              </p>
            </div>
          </div>
        </a>
        <a href="src\components\FIFO(H).html" className="hatao">
          <div className="card">
            <div className="text">
              <h1>FIFO</h1>
            </div>
            <div className="para">
              <p>
                For each page reference: Check if the page exists in the queue
                If true: continue Else: Check if appending the page in queue
                will overflow the queue If true: Remove the first page in queue
                Add page to the rear of the queue
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Body;
