# Graph Auto-Scaling Feature

## Problem Solved

When graph data values have small variations relative to their absolute values (e.g., values ranging from 2016.5 to 2017.2), starting the Y-axis from 0 makes it very difficult to distinguish between the values visually.

## Solution

The graph component now automatically detects when auto-scaling would be beneficial and adjusts the Y-axis range to focus on the actual data range.

## How it Works

### Automatic Detection

Auto-scaling is automatically enabled when:
1. The data range is less than 10% of the minimum value, OR
2. The minimum value is more than 10x the range from zero

### Example

**Before (Y-axis 0 to ~2018):**
```
Values: [2016.5, 2017.2, 2016.8, 2017.1, 2016.9]
Y-axis: 0 to 2018
Visual difference: Almost imperceptible
```

**After (Auto-scaled Y-axis):**
```
Values: [2016.5, 2017.2, 2016.8, 2017.1, 2016.9]  
Y-axis: ~2016.46 to ~2017.24
Visual difference: Clearly visible variations
```

## Manual Control

You can also manually control the scaling by setting `yAxisOpts.mode = "auto"` in your graph configuration.

## Supported Chart Types

- Line charts
- Bar charts

## Backward Compatibility

This feature is fully backward compatible. Charts with normal value ranges (e.g., 10 to 80) will continue to use the default Y-axis behavior.