<template>
  <v-app>
    <v-main>
      <v-container max-width="650px">
        <v-row>
          <v-col cols="12" class="section">
            <v-card>
              <v-card-text>
                Starts/Stops generation of three random numbers between 0 and
                255 every second.
              </v-card-text>
              <v-card-actions>
                <RCGControls @generate-nums="setRandomNums" />
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-text>
                The decimal values of the three generated numbers.
                <v-divider>
                  <RCGDecimalValues :nums="rgbNums" />
                </v-divider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-text>
                <p class="pb-2">
                  The CSS hex RGB color representation of the three numbers.
                </p>
                <v-divider>
                  <RCGHexColorValue :nums="rgbNums" />
                </v-divider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-text>
                The number of colors generated so far. The reset button resets
                the counter.
              </v-card-text>
              <RCGUpdatesControls :nums="rgbNums" />
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-text
                >Same as above but counting has a three second
                delay.</v-card-text
              >
              <RCGUpdatesControls :is-delayed="true" :nums="rgbNums" />
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-text>
                Dynamically selects one of the three views above. If the
                checkbox is checked applies a three second delay to the view.
              </v-card-text>
              <v-card-actions>
                <RCGViewSelector :nums="rgbNums" />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RCGControls from "./components/RCGControls.vue";
import RCGDecimalValues from "./views/RCGDecimalValues.vue";
import RCGHexColorValue from "./views/RCGHexColorValue.vue";
import RCGUpdatesControls from "./views/RCGUpdatesControls.vue";
import RCGViewSelector from "./views/RCGViewSelector.vue";

const rgbNums = ref<number[]>([0, 0, 0]);

const setRandomNums = (): void => {
  const randomValue = () => Math.floor(Math.random() * 256);
  const red = randomValue();
  const green = randomValue();
  const blue = randomValue();
  rgbNums.value = [red, green, blue];
};
</script>
